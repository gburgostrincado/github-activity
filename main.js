#!/usr/bin/env node

const args = process.argv.slice(2); 
const user = args[0];

const fetchRepoByUser = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/events`)
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return [];
  }
};

const processEvents = (event) => {
  const { repo, payload: { commits, ref_type, ref }, type } = event;

  switch (type) { 
    case 'PushEvent':
      return `Pushed ${commits.length} commits to ${repo.name}`;
    case 'DeleteEvent':
      return ref_type === 'branch' 
        ? `Deleted branch ${ref} at ${repo.name}`
          : `Deleted ${repo.name}`;
    case 'CreateEvent':
      return ref_type === 'branch' 
        ? `Created branch ${ref} at ${repo.name}` 
          : ref_type === 'repository'
        ? `Created a repository ${repo.name}` 
          : `Created ${repo.name}`;
    default:
      return null;
  }
};

const showActivity = async (user) => {
  if (!user) {
    throw new Error(`You must enter user. ${data.message}`);
  }

  try {
    const events = await fetchRepoByUser(user);
    
    if (events.length === 0) {
      throw new Error(`No data found for ${user}`);
    }
    
    const messages = events.map(processEvents).filter(Boolean);
    messages.length > 0 
      ? console.log(messages.map(message => `🔵 ${message}`).join('\n'))
      : console.log(`No activity found for ${user}`);
    
  } catch (error) {
    console.error("❌ Error al obtener los datos:", error);
  }
}

showActivity(user);
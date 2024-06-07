function formatDuration(startDate, endDate) {
    let durationInMilliseconds = endDate - startDate;
  
    if (durationInMilliseconds < 0) {
      return "1s";
    }
  
    const seconds = Math.floor(durationInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // This is a rough estimate
  
    if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''}`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''}`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''}`;
    }
  }
  
//   // Example usage
  let startDate = new Date("2024-01-30T13:29:53.049Z");
  let endDate = new Date(); // Current date and time
  
//   let duration = formatDuration(startDate, endDate);
//   console.log(`The duration is: ${duration}`);
  export  default formatDuration
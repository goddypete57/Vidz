function formatDurationSec(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemainder = seconds % 60;
  
    // const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = secondsRemainder < 10 ? '0' + secondsRemainder : secondsRemainder;
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
//   const totalSeconds = 3725; // Example duration in seconds
//   const formattedDuration = formatDuration(totalSeconds);
//   console.log(formattedDuration);

  export default formatDurationSec
import * as readline from "readline-sync";
import { CountdownTimer } from "./countdowntimer";

function main() {
  const year = parseInt(readline.question("Enter the year: "));
  const month = parseInt(readline.question("Enter the month (1-12): "));
  const day = parseInt(readline.question("Enter the day (1-31): "));
  const hour = parseInt(readline.question("Enter the hour (0-23): "));
  const minute = parseInt(readline.question("Enter the minute (0-59): "));
  const second = parseInt(readline.question("Enter the second (0-59): "));

  const targetDate = new Date(year, month - 1, day, hour, minute, second);
  const countdownTimer = new CountdownTimer(targetDate);

  countdownTimer.start();
}

main();

import * as readline from "readline-sync";

export class CountdownTimer {
  private targetDate: Date;

  constructor(targetDate: Date) {
    this.targetDate = targetDate;
  }

  start() {
    console.log("Countdown Timer Started!");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        console.log("Countdown Ended!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }
}

import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  randomText = lorem.sentence();
  letters = this.randomText.split("").map((letter) => {
    return {
      letter,
      className: "",
    };
  });
  enteredText = "";
  success = false;

  onTextInput(e: Event): void {
    this.letters.forEach((letter) => (letter.className = ""));
    this.enteredText = (e.target as HTMLInputElement).value;
    this.success = this.enteredText === this.randomText;

    for (let i = 0; i < this.enteredText.length; i++) {
      if (this.randomText.includes(this.enteredText[i])) {
        this.letters[i].className =
          this.randomText[i] === this.enteredText[i] ? "correct" : "wrong";
      } else {
        this.letters[i].className = "wrong";
      }
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Form } from "../../models/form";
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  form: Form;
  vacTypes: string[];

  constructor(private dialog: MatDialog) {
    this.vacTypes = ["Paid Day Off (PD)", "UnPaid Day Off (PD)"];
  }

  ngOnInit() {}

  onClose(): void {
    this.dialog.closeAll();
  }

  onSend(from, to, vacType): void {
    this.form = {
      from: from,
      to: to,
      vacType: vacType,
    };
    console.log(this.form);
  }
}

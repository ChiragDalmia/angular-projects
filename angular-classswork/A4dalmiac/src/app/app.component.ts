import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

class ControlDefaults {
  controlID!: string;
  controlFirst!: string;
  controlLast!: string;
  controlSize!: string;
  controlColour!: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'A4dalmiac';
  url = 'assets/data/A4Form.json';
  jsonData: any;
  controlDefaults: ControlDefaults = {} as ControlDefaults;
  sizes: { size: string }[] = [];
  currentDate = new Date();
  dalmiacForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.dalmiacForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: any) => {
      this.jsonData = data;
      this.controlDefaults = this.jsonData.controlDefaults;
      this.sizes = this.jsonData.shirtSizes;

      this.dalmiacForm = this.fb.group({
        id991714375: [this.controlDefaults.controlID],
        Chirag: [this.controlDefaults.controlFirst],
        Dalmia: [this.controlDefaults.controlLast],
        dalmiacsize: [this.controlDefaults.controlSize],
        dalmiaccolour: [this.controlDefaults.controlColour],
        dalmiacinclude1: [false],
        dalmiacinclude2: [false],
        dalmiacdate: [this.currentDate],
      });
    });
  }

  onSubmit(): void {
    if (this.dalmiacForm.valid) {
      const formValue = this.dalmiacForm.value;
      let inclusions = 'No Inclusions';
      if (formValue.dalmiacinclude1 && formValue.dalmiacinclude2) {
        inclusions = 'Name and Logo added';
      } else if (formValue.dalmiacinclude1) {
        inclusions = 'Name added';
      } else if (formValue.dalmiacinclude2) {
        inclusions = 'Logo added';
      }

      const output = `
        ${formValue.id991714375} / ${formValue.Chirag} ${formValue.Dalmia}
        Ordered ${formValue.dalmiacsize} size shirt in colour ${
        formValue.dalmiaccolour
      }
        Includes: ${inclusions}
        Ordered: ${formValue.dalmiacdate.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      `;

      const outputElement = document.querySelector('#output');
      if (outputElement) {
        outputElement.textContent = output;
      }
    }
  }
}

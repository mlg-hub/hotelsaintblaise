import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isEditing = false;
  aboutText: string;

  constructor() { }

  ngOnInit() {
    this.aboutText = `Lorem  obcaecati; ut; quasi; culpa; possimus; amet; consequatur. Omnis; fugiat; exercitationem, ratione; id; quae; harum; laboriosam!; Officiis; perferendis; hic; praesentium; incidunt; commodi, expedita; possimus; amet, eum;
    accusamus; consequatur; facere; cum; labore; quidem; consequuntur; cupiditate; enim; deleniti; eligendi!; Eum, eos ? Officia  nisi; sed; delectus; repellat; voluptate; repudiandae!`;
  }

  edit() {
    this.isEditing = true;
    console.log('is editing');
  }
  update(){

    this.isEditing = false;
  }

}

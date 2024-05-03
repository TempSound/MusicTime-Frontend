import { MusicianService } from './../../service/musician-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Musician } from '../../model/musician.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-edit-create-musician',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edit-create-musician.component.html',
  styleUrl: './edit-create-musician.component.css'
})
export class EditCreateMusicianComponent implements OnInit {
  myform!: FormGroup;
  title: string = 'Agregar músico'
  id!: number;
  constructor(private musicianServie: MusicianService, private formBuilder: FormBuilder,
    private routed: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.loadForm()
    this.loadData()
  }
  loadForm() {
    this.myform = this.formBuilder.group({
      name: ['', Validators.required],
      manager: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  loadData() {
    this.id = this.routed.snapshot.params['id'];
    if (this.id) {
      this.title = 'Editar músico'
      this.musicianServie.getOne(this.id).subscribe(
        (data: Musician) => {
          this.myform.get('name')?.setValue(data.name);
          this.myform.get('description')?.setValue(data.description);
          this.myform.get('manager')?.setValue(data.manager);
        }
      )
    }
  }
  addMusician() {
    let musician: Musician = {
      name: 'some name',
      imageUrl: 'some image url',
      manager: 'some manager',
      description: 'some description'
    };
    if (this.id) {
      console.log(musician)
      this.musicianServie.updateMusician(this.id, musician).subscribe(
        (data) => {
          this.router.navigate(['/musician'])
        },
        error => {
          console.log(error);
          alert('error');
        }
      )
    } else {
      this.musicianServie.createMusician(musician).subscribe(
        (data) => {
          this.router.navigate(['/musician'])
        },
        error => {
          console.log(error);
          alert('error');
        }
      )
    }
  }
}

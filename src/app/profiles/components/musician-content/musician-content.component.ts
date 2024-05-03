import {Component, OnInit} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Musician} from "../../model/musician.model";
import {MusicianService} from "../../service/musician-api.service";

@Component({
  selector: 'app-musician-content',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './musician-content.component.html',
  styleUrl: './musician-content.component.css'
})
export class MusicianContentComponent implements OnInit{
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'manager', 'description'];
  Musician: Musician[] = [];
  MusicianData: Musician;

  constructor(private musicianService: MusicianService) {
    this.MusicianData = {} as Musician;
  }

  ngOnInit() {
    this.getMusicians();
  }

  getMusicians(){
    this.musicianService.getAll().subscribe((data:any) => {
      console.log(data);

      if (data && !data.error) {
        this.MusicianData = new Musician(data.name, data.manager, data.description);
        this.Musician = [...this.Musician, this.MusicianData];
        this.dataSource.data = this.Musician;
      } else {
        console.error('No se encontraron datos en los datos devueltos por la API');
      }
    });
  }

}

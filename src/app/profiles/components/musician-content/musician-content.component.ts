import { MusicianService } from '../../service/musician-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Musician } from "../../model/musician.model";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'musician-content',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIconModule, RouterLink],
  templateUrl: './musician-content.component.html',
  styleUrl: './musician-content.component.css'
})
export class MusicianContentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'manager', 'description', 'action'];
  dataSource: MatTableDataSource<Musician> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private musicianService: MusicianService) {
  }

  ngOnInit() {
    this.getMusicians();
  }
  getMusicians() {
    this.musicianService.getAll().subscribe(
      (data: Musician[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.log(error);
      }
    )
  }
  deleteMusician(id: number) {
    this.musicianService.deleteMusician(id).subscribe(
      (data) => {
        this.getMusicians()
      },
      error => {
        console.log(error);
        alert('error');
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}





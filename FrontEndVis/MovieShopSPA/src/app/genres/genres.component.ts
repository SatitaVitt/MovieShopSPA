import { Component, OnInit } from '@angular/core';
import { GenreService } from '../core/services/genre.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:Genre[];
  constructor(private genreService: GenreService) { }

  //Angular LifeCycle Hooks method
  ngOnInit(){
    //console.log('Component Initialized')
    this.genreService.getAllGenres().subscribe(
      g => {
        this.genres = g;
      }
    );
  }
  ngOnDestory(){
    //console.log('Component finished and destroyed')
  }

}
/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
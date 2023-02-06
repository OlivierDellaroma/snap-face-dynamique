import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!:FaceSnap[];
  faceSnaps$!:Observable<FaceSnap[]>;

  private destroy$ !: Subject<boolean>;
 
constructor(private faceSnapsService : FaceSnapsService ) {}
  

ngOnDestroy(): void {
      this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>;
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();


  }
  

}

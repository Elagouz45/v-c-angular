import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {addDays, addHours, endOfMonth, startOfDay, subDays} from "date-fns";

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
})
export class AddClassComponent implements OnInit, OnDestroy {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  public exampleData: Array<any>;
  public options: any;
  public _value: string[];
  private unsubscribe: Subscription[] = [];
  refresh = new Subject<void>();
  events: any[] = [
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      allDay: true,
    },

  ];
  constructor(private cdr: ChangeDetectorRef) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'multiple1',
        name: 'Multiple 1'
      },
      {
        id: 'multiple2',
        name: 'Multiple 2'
      },
      {
        id: 'multiple3',
        name: 'Multiple 3'
      },
      {
        id: 'multiple4',
        name: 'Multiple 4'
      }
    ];

    this._value = ['multiple2', 'multiple4'];

    this.options = {
      width: '300',
      multiple: true,
      tags: true
    };
  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

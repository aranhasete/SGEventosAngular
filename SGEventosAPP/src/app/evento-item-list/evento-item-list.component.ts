import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoItemService } from '../services/evento-item.service';
import { EventoItem } from '../models/EventoItem';

@Component({
  selector: 'app-evento-item-list',
  templateUrl: './evento-item-list.component.html',
  styleUrls: ['./evento-item-list.component.css']
})
export class EventoItemListComponent implements OnInit {
  blogPosts$: Observable<EventoItem[]>;

  constructor(private eventoItemService: EventoItemService) {
  }

  ngOnInit() {
    this.loadEventoItems();
  }

  loadEventoItems() {
    this.blogPosts$ = this.eventoItemService.getEventoItems();
  }

  delete(eventoItemId) {
    const ans = confirm('Do you want to delete blog post with id: ' + eventoItemId);
    if (ans) {
      this.eventoItemService.deleteEventoItem(eventoItemId).subscribe((data) => {
        this.loadEventoItems();
      });
    }
  }
}

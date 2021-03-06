import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'kb-private-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'admin');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'admin');
  }
}

import {Component, Output, EventEmitter, HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{
    @Output() selectedNav  = new EventEmitter<boolean>();
    @ViewChild('dropdown') elRef:ElementRef;
    @ViewChild('navbar') navRef:ElementRef;

    constructor(){}
    
    onClickDropdown(){
        if(this.elRef.nativeElement.className === 'dropdown-menu'){
            this.elRef.nativeElement.className='dropdown-menu show'
        }else{
            this.elRef.nativeElement.className='dropdown-menu'
        }
    }
    toggleNav(){
        if(this.navRef.nativeElement.className === 'collapse navbar-collapse'){
            this.navRef.nativeElement.className='collapse navbar-collapse show'
        }else{
            this.navRef.nativeElement.className='collapse navbar-collapse'
        }
    }

}
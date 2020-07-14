/**
 * @author        Gonzales Liendo Facundo
 * @description   Componente del Inicio
 * @type          Component
 */

import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Nivel } from '../../models/nivel';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, OnChanges{ 

    public nivel: Nivel;
    public niveles: Nivel[];

    constructor(private router: Router) { 
        this.nivel = new Nivel('', 0, 0, 0);
        this.niveles = [
            { dificultad: 'Facil', filas: 8, columnas:8, minas: 10 },
            { dificultad: 'Medio', filas: 10, columnas:10, minas: 15 },
            { dificultad: 'Dificil', filas: 12, columnas:12, minas: 20 },
        ]
    }

    onSubmit(){
        localStorage.setItem('dificultad', JSON.stringify(this.nivel));
        this.router.navigate(['/juego']);
    }

    ngOnChanges(changes: SimpleChanges): void{
        if(changes.niveles){
            console.log('cambio difucultad',this.nivel.dificultad)
        }
    }
    
    ngOnInit(){
        console.log(this.nivel.dificultad)
    }
}

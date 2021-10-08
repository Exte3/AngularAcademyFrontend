import { Component, Input, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'; /// instalar la librería con npm install chart.js --save
import {registerables } from 'chart.js';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  numMujeres = 0;
  numHombres = 0;
  numDoct = 0;
  numProfes = 0;
  numUniv = 0;

  constructor(public profesorService : ProfesorService) { 
    
  }

 

  ngOnInit(): void {
    // console.log("=>>"+ this.profesorService.contarMujeres())
    // console.log("=>>"+ this.profesorService.contarHombres())
    // this.profesorService.contarMujeres()
    // this.profesorService.contarHombres()
    // console.log(this.numHombres)
    // console.log(this.numMujeres)

    for(let i =0; i < this.profesorService.profesor.length; i++) {
      console.log("sexo==>" + this.profesorService.profesor[i].sexo);
      if(this.profesorService.profesor[i].sexo == "H"){this.numHombres= this.numHombres +1};
      if(this.profesorService.profesor[i].sexo == "M"){this.numMujeres= this.numMujeres +1};

      if(this.profesorService.profesor[i].grado_academico == "Doctorado"){this.numDoct= this.numDoct +1};
      if(this.profesorService.profesor[i].grado_academico == "Profesional"){this.numProfes= this.numProfes +1};
      if(this.profesorService.profesor[i].grado_academico == "Universidad"){this.numUniv= this.numUniv +1};
    }


      

    // }


    var myChart = new Chart( 'myChart', {
      type: 'bar',
      data: {
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          labels: ['Mujeres', 'Hombres'],
          datasets: [{
              label: 'N° de profesores',
              // data: [12, 19, 3, 5, 2, 3],
              data: [this.numMujeres, this.numHombres],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });



  var myChart = new Chart( 'grafGrad', {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: ['Profesional', 'Doctorado' , 'Universidad'],
        
        datasets: [{
            label: 'N° de profesores',
            // data: [12, 19, 3, 5, 2, 3],
            data: [this.numDoct, this.numProfes, this.numUniv],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});







  }

}

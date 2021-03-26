import { Injectable } from '@angular/core';
import { Department } from 'src/app/shared/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private _departments: Department[] = [

    {
      name: "The American Wing",
      description: "Ever since its establishment in 1870, the Museum has acquired important examples of American art. Today, the American Wing's ever-evolving collection comprises some 20,000 works by African American, Euro American, Native American, and Latin American artists, ranging from the colonial to early- modern period.",
      img: "https://images.metmuseum.org/CRDImages/ad/web-large/DT2030.jpg"
    },
    {
      name: "Ancient Near Eastern Art",
      description: "The Met's collection of ancient Near Eastern art includes more than 7,000 works ranging in date from the eighth millennium B.C.through the centuries just beyond the time of the Arab conquests of the seventh century A.D.",
      img: "https://images.metmuseum.org/CRDImages/an/web-large/DT850.jpg"
    },
    {
      name: "Arms and Armor",
      description: "The principal goals of the Arms and Armor Department are to collect, preserve, research, publish, and exhibit distinguished examples representing the art of the armorer, swordsmith, and gunmaker.",
      img: "https://images.metmuseum.org/CRDImages/aa/web-large/DP-12881-004.jpg"
    },
    {
      name: "Ancient American Art",
      description: "The Met's collection of ancient American art comprises more than 6,000 works of art representing almost 5,000 years of history from North, Central, and South America and the Caribbean. ",
      img: "https://images.metmuseum.org/CRDImages/ad/web-large/L.2009.22.279a.b.jpg"
    },
    {
      name: "Asian Art",
      description: "The Met's collection of Asian art—more than 35,000 objects, ranging in date from the third millennium B.C. to the twenty - first century—is one of the largest and most comprehensive in the world. ",
      img: "https://images.metmuseum.org/CRDImages/as/web-large/DT1850.jpg"
    },
    {
      name: "The Costume Institute",
      description: "The Costume Institute's collection of more than 33,000 costumes and accessories represents five continents and seven centuries of fashionable dress and accessories for men, women, and children, from the fifteenth century to the present.",
      img: "https://images.metmuseum.org/CRDImages/ci/web-large/CI54.70ab.jpg"
    },
    {
      name: "Drawings and Prints",
      description: "The Met's collection of drawings and prints—one of the most comprehensive and distinguished of its kind in the world—began with a gift of 670 works from Cornelius Vanderbilt, a Museum trustee, in 1880.",
      img: "https://images.metmuseum.org/CRDImages/dp/web-large/DP832663.jpg"
    },
    {
      name: "Egyptian Art",
      description: "The Met's collection of ancient Egyptian art consists of approximately 26,000 objects of artistic, historical, and cultural importance, dating from the Paleolithic to the Roman period(ca. 300, 000 B.C.–A.D. 4th century).",
      img: "https://images.metmuseum.org/CRDImages/eg/web-large/DP240337.jpg"
    },
    {
      name: "European Paintings",
      description: "The Met's celebrated European Paintings collection encompasses more than 2,500 works of art from the thirteenth through the early twentieth century.",
      img: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-1019-01.jpg"
    },
    {
      name: "European Sculpture and Decorative Arts",
      description: "The 50,000 objects in the Museum's comprehensive collection of European sculpture and decorative arts reflect the development of a number of art forms in Western European countries from the early fifteenth through the early twentieth century.",
      img: "https://images.metmuseum.org/CRDImages/es/web-large/DP247545.jpg"
    },
    {
      name: "Greek and Roman Art",
      description: "The Museum's collection of Greek and Roman art comprises more than 30,000 works ranging in date from the Neolithic period(ca. 4500 B.C.) to the time of the Roman emperor Constantine's conversion to Christianity in A.D. 312.",
      img: "https://images.metmuseum.org/CRDImages/gr/web-large/DP337268.jpg"
    },
    {
      name: 'Islamic Art',
      description: "The Met's collection of Islamic art is one of the most comprehensive in the world and ranges in date from the seventh to the twenty - first century.Its more than 15, 000 objects reflect the great diversity and range of the cultural traditions from Spain to Indonesia.",
      img: "https://images.metmuseum.org/CRDImages/is/web-large/DP170372.jpg"
    },
    {
      name: "The Robert Lehman Collection",
      description: "The Robert Lehman Collection is one of the most distinguished privately assembled art collections in the United States.Robert Lehman's bequest to The Met is a remarkable example of twentieth-century American collecting.",
      img: "https://images.metmuseum.org/CRDImages/rl/web-large/DT707.jpg"
    },
    {
      name: "Medieval Art and The Cloisters",
      description: "The Museum's collection of medieval and Byzantine art is among the most comprehensive in the world, encompassing the art of the Mediterranean and Europe from the fall of Rome to the beginning of the Renaissance.",
      img: "https://images.metmuseum.org/CRDImages/cl/web-large/DT8443.jpg"
    },
    {
      name: 'Modern and Contemporary Art',
      description: "The Met has collected and exhibited work by living artists since its founding in 1870. Today, the department's holdings comprise more than 12,000 works of art across a broad range of media from 1900 to the present.",
      img: "https://images.metmuseum.org/CRDImages/ep/web-large/DP243637.jpg"
    },
    {
      name: "Musical Instruments",
      description: "The Museum's collection of musical instruments includes approximately 5,000 examples from six continents and the Pacific Islands, dating from about 300 B.C.to the present.",
      img: "https://images.metmuseum.org/CRDImages/mi/web-large/DP217184.jpg"
    },
    {
      name: "Oceanic Art",
      description: "The expansive region of Oceania covers over a third of the Earth's surface and is home to some 1,800 different cultures and a kaleidoscopic range of artistic traditions.The Met's collection of Oceanic art comprises over 2, 800 works that present the rich history of creative expression and innovation that is emblematic of the Pacific islands.",
      img: "https://images.metmuseum.org/CRDImages/ao/web-large/66.196.40.jpg"
    },
    {
      name: "Photographs",
      description: "Established as an independent curatorial department in 1992, The Met's Department of Photographs houses a collection of approximately 75, 000 works spanning the history of photography from its invention in the 1830s to the present.",
      img: "https://images.metmuseum.org/CRDImages/ph/web-large/DT1161.jpg"
    },
    {
      name: "Sub-Saharan Africa Art ",
      description: " The Met's collection of works by artists from across sub-Saharan Africa comprises nearly 3,000 works spanning two  millennia, several hundred distinct cultures, and 39 contemporary nation states.",
      img: "https://images.metmuseum.org/CRDImages/ao/web-large/DT1234.jpg"

    }];

    getDepartments(): Department[] {
      return this._departments;
    }
}

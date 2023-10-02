import { TestBed } from "@angular/core/testing";
import { PicturesService } from "./pictures.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

const mockData = {
  API : "http://localhost:3000/getimages",
  data : [
    {
      id: 0,
      url: "https",
      description: "desc 1",
      name: "camaro" 
    },
    {
      id: 1,
      url: "http",
      description: "desc 2",
      name: "mustang" 
    },
    {
      id: 3,
      url: "httpss",
      description: "desc 3",
      name: "challenger" 
    }
  ]
}


describe("Carros Service", () => {
  let service: PicturesService;
  let httpController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [PicturesService]
    }).compileComponents()

    service = TestBed.inject(PicturesService)
    httpController = TestBed.inject(HttpTestingController)
  })

  afterEach(() => httpController.verify())

  it("#retornaCarros should return cars with description in uppercase", (done) => {
    service.retornaCarros().subscribe({
      next : (carArray) => {
        expect(carArray[0].description).toBe("DESC 1")
        expect(carArray[1].description).toBe("DESC 2")
        expect(carArray[2].description).toBe("DESC 3")
        done()
      }
    })

    httpController.expectOne(mockData.API).flush(mockData.data)
  })
})
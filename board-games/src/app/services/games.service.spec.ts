import { TestBed, inject } from '@angular/core/testing';

import { GamesService } from './games.service';
import { HttpClient } from '@angular/common/http';
import gameMockArray, { HttpClientMock } from '../mocks/HttpClientMock';

fdescribe('GamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesService,
        {
          provide: HttpClient, 
          useClass: HttpClientMock
        }
      ]
    });
  });

  it('should be created', inject([GamesService], (service: GamesService) => {
    expect(service).toBeTruthy();
  }));

  it('should get return games', inject([GamesService], (service: GamesService) => {
    const ob = service.getGames().subscribe( (games) => {
      expect(games).toEqual(gameMockArray);
    });
  }));

  it('should use proper url when calling api', inject([GamesService, HttpClient], (service: GamesService, httpClient: HttpClient) => {
    const get = spyOn(httpClient,'get');
    const apiUrl = 'http://webrental.azurewebsites.net/api/boardgames';
    service.getGames();
    expect(get).toHaveBeenCalledWith(apiUrl);
  }));


});

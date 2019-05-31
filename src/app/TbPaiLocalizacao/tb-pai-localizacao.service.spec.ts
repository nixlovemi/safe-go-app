import { TestBed } from '@angular/core/testing';

import { TbPaiLocalizacaoService } from './tb-pai-localizacao.service';

describe('TbPaiLocalizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TbPaiLocalizacaoService = TestBed.get(TbPaiLocalizacaoService);
    expect(service).toBeTruthy();
  });
});

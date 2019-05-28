import { TestBed } from '@angular/core/testing';

import { TbUsuarioService } from './tb-usuario.service';

describe('TbUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TbUsuarioService = TestBed.get(TbUsuarioService);
    expect(service).toBeTruthy();
  });
});

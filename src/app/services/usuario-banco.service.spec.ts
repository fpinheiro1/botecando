import { TestBed } from '@angular/core/testing';

import { UsuarioBancoService } from './usuario-banco.service';

describe('UsuarioBancoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioBancoService = TestBed.get(UsuarioBancoService);
    expect(service).toBeTruthy();
  });
});

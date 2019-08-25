describe("cipher", () => {
  it("debería ser un objeto", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(
        cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),
        "HIJKLMNOPQRSTUVWXYZABCDEFG"
      );
    });
  });

  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(
        cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    });
  });

  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it('debería retornar "vwxyzabcdefghijklmnopqrstu" para "abcdefghijklmnopqrstuvwxyz" con offset 99', () => {
      assert.equal(
        cipher.encode("abcdefghijklmnopqrstuvwxyz", 99),
        "vwxyzabcdefghijklmnopqrstu"
      );
    });
  });

  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "vwxyzabcdefghijklmnopqrstu" con offset 99', () => {
      assert.equal(
        cipher.decode("vwxyzabcdefghijklmnopqrstu", 99),
        "abcdefghijklmnopqrstuvwxyz"
      );
    });
  });
  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it('debería retornar "NfotbkfEftdjgsbep" para "MensajeDescifrado" con offset 1', () => {
      assert.equal(
        cipher.encode("MensajeDescifrado", 1),
        "NfotbkfEftdjgsbep"
      );
    });
  });
  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "MensajeDescifrado" para "NfotbkfEftdjgsbep" con offset 1', () => {
      assert.equal(
        cipher.decode("NfotbkfEftdjgsbep", 1),
        "MensajeDescifrado"
      );
    });
  });
});

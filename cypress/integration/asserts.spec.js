/// <reference types="Cypress" />

it('Equality', () =>{
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    // validando objetos
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({a:1, b:2});
    expect(obj).eql({a: 1, b: 2});
    expect(obj).include({a: 1});
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('Arrays', () => {
    const arr = [1,2,3]

    // verificando o array
    expect(arr).to.have.members([1,2,3]);

    //validando se os numeros estão incluídos no array
    expect(arr).to.include.members([1,3]);

    //verifica se o array não está vazio
    expect(arr).to.not.be.empty;

    //verifica se o array está vazio
    expect([]).to.be.empty;
})

it('Types', () => {
    const num = 1;
    const str = 'string';

    //validando se a variavel é do tipo numerico
    expect(num).to.be.a('number');

    //validando se a variavel é string
    expect(str).to.be.a('string');

    //validando se é um objeto
    expect({}).to.be.an('object');

    //validando se é array
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');

    //busca por regex
    expect(str).to.match(/de/);

    //busca por inicio da palvra ou texto
    expect(str).to.match(/^String/);

    //busca por fim da palvra ou texto
    expect(str).to.match(/teste$/);

    //verifica o tamanho da string
    expect(str).to.match(/.{15}/);

    //verifica se existem apenas letras
    expect(str).to.match(/\w+/)

    //verifica se não contém números
    expect(str).to.match(/.{15}/)
})

it('Numbers', () => {
    const number = 4
    const floatnumber = 5.2123

    expect(number).to.be.equal(4);
    expect(number).to.be.above(4);
    
})

const {
    Persona,
    Empleado,
    pasarAES6
} = require('../Ejercitacion.js');


describe('Clases en JS', function(){
    describe("Clase Persona", function(){
        it("Debe ser una clase ES6, que instancie correctamente personas", function(){
            const persona = new Persona
            const persona2 = new Persona('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456)
            expect(persona instanceof Persona).toBe(true)
            expect(persona2 instanceof Persona).toBe(true)
            expect(persona2.nombre).toBe('camilo')
            expect(persona2.apellido).toBe('pineda')
            expect(persona2.edad).toBe(20)
            expect(persona2.pasaTiempo).toBe('hacer testing')
            expect(persona2.email).toBe('camilo@bootcamp.com')
            expect(persona2.password).toBe(123456)
        })
        it("Debe tener un metodo Saludar, que retorne un saludo `Hola {nombre de la persona}` ", function(){
            const persona = new Persona('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456)
            expect(persona instanceof Persona).toBe(true)
            expect(persona.saludar()).toBe('Hola camilo')
        })
        it("Debe tener un metodo mayoriaDeEdad, que retorne true, si la persona es mayor de 18 años ", function(){
            const persona = new Persona('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456)
            const persona2 = new Persona('camilo', 'pineda', 16, 'hacer testing', 'camilo@bootcamp.com', 123456)
            expect(persona instanceof Persona).toBe(true)
            expect(persona.mayoriaDeEdad()).toBe(true)
            expect(persona2 instanceof Persona).toBe(true)
            expect(persona2.mayoriaDeEdad()).toBe(false)
        })
        it("Debe tener un metodo 'pasaTiempo', que retorne un arreglo de por lo menos 3 pasatiempos", function(){
            const persona = new Persona('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456)
            expect(persona instanceof Persona).toBe(true)
            expect(typeof persona.pasaTiempos()).toBe('object')
            expect(persona.pasaTiempos().length).toBeGreaterThanOrEqual(3)
            const arrayPasaTiempos = persona.pasaTiempos()
            arrayPasaTiempos.forEach((pasaTiempo)=> {
                expect(typeof pasaTiempo).toBe('string')
            })
        })
        it("Debe terner un metodo 'login', que retorne 'logueado' si el email y password recibidos, matchear con el email y password de la Persona. en caso contrario debe retornar '404'", function(){
            const persona = new Persona('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456)
            const persona2 = new Persona('vero', 'valdez', 20, 'hacer testing', 'vero@bootcamp.com', '123456')
            expect(persona instanceof Persona).toBe(true)
            expect(persona.login('camilo@bootcamp.com', 123456)).toBe('logueado')
            expect(persona.login('camilo@bootcamp.com', 653214)).toBe('404')
            expect(persona2 instanceof Persona).toBe(true)
            expect(persona2.login('vero@bootcamp.com', '123456')).toBe('logueado')
            expect(persona2.login('vero@bootcamp.com', 123456)).toBe('404')
        })
    })

    describe("Clase Empleado", function(){
        it("Debe ser una clase ES6, que instancie correctamente Empleados", function(){
            const persona = new Empleado
            const persona2 = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'instructor', 0)
            expect(persona instanceof Empleado).toBe(true)
            expect(persona2 instanceof Empleado).toBe(true)
            expect(persona2.nombre).toBe('camilo')
            expect(persona2.apellido).toBe('pineda')
            expect(persona2.edad).toBe(20)
            expect(persona2.pasaTiempo).toBe('hacer testing')
            expect(persona2.email).toBe('camilo@bootcamp.com')
            expect(persona2.password).toBe(123456)
            expect(persona2.empresa).toBe('bootcamp')
            expect(persona2.cargo).toBe('instructor')
            expect(persona2.salario).toBe(0)
        })
        it("Debe tener un metodo 'cantidadVacaciones', que retorne un entero con la cantidad de vacaciones segun lo establecido", function(){
            const persona = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'ayudante', 0)
            const persona2 = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'jefe', 0)
            const persona3 = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'asistente', 0)
            expect(persona instanceof Empleado).toBe(true)
            expect(persona.cantidadVacaciones()).toBe(0)
            expect(persona2 instanceof Empleado).toBe(true)
            expect(persona2.cantidadVacaciones()).toBe(20)
            expect(persona3 instanceof Empleado).toBe(true)
            expect(persona3.cantidadVacaciones()).toBe(10)
        })
        it("Debe tener un metodo 'Saludar', que retorne `{nombre} {apellido} {cargo}` ", function(){
            const persona = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'instructor', 0)
            expect(persona instanceof Empleado).toBe(true)
            expect(persona.saludar()).toBe('camilo pineda instructor')
        })
        it("Debe tener un metodo 'acceso', que utilizando el metodo 'login' verifique si la persona puede loguearse. y retorne el mensaje apropiado segun lo establecido", function(){
            const persona = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'ayudante', 0)
            const persona2 = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'jefe', 0)
            const persona3 = new Empleado('camilo', 'pineda', 20, 'hacer testing', 'camilo@bootcamp.com', 123456, 'bootcamp', 'asistente', 0)
            expect(persona instanceof Empleado).toBe(true)
            expect(persona.acceso()).toBe('bienvenido ayudante')
            expect(persona2 instanceof Empleado).toBe(true)
            expect(persona2.acceso()).toBe('bienvenido jefe')
            expect(persona3 instanceof Empleado).toBe(true)
            expect(persona3.acceso()).toBe('404')
        })
    })
})

describe('ES6', function(){
        describe("Transformando a ES6", function(){
            it("'pasarAES6', Debe ser una arrow function", function(){
                expect(typeof pasarAES6).toBe('function')
            })
            it("Destructura el objeto recibido por argumento", function(){
                const objeto = {
                    nombre: 'camilo',
                    apellido: 'pineda',
                    edad: 20
                }
                expect(typeof pasarAES6).toBe('function')
                expect(pasarAES6(objeto, [])).toEqual({
                    nombre: 'camilo',
                    apellido: 'pineda',
                    edad: 20,
                    ciudad: "san salvador",
                    pais: "argentina",
                    listaCompras: ['pan','arroz','pasta']
                })
            })
            it("Aplicar Spread Operator sobre el Array recibido, para crear listaCompras", function(){
                const objeto = {
                    nombre: 'vero',
                    apellido: 'valdez',
                    edad: 20
                }
                expect(typeof pasarAES6).toBe('function')
                expect(pasarAES6(objeto, ['clase', 'jsAvanzado'])).toEqual({
                    nombre: 'vero',
                    apellido: 'valdez',
                    edad: 20,
                    ciudad: "san salvador",
                    pais: "argentina",
                    listaCompras: ['clase', 'jsAvanzado','pan','arroz','pasta']
                })
            })
            it("Cambiar el 'if' - 'else' por un 'operador ternario'", function(){
                const objeto = {
                    nombre: 'mauro',
                    apellido: 'loyola',
                    edad: 20
                }
                expect(typeof pasarAES6).toBe('function')
                expect(pasarAES6(objeto, ['asistente', 'jsAvanzado'])).toEqual({
                    nombre: 'mauro',
                    apellido: 'loyola',
                    edad: 20,
                    ciudad: "san salvador",
                    pais: "argentina",
                    listaCompras: ['asistente', 'jsAvanzado','pan','arroz','pasta']
                })
            })
        })
        
})





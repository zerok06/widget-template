define(['jquery'], function ($) {
    var CustomWidget = function () {
        var self = this, // to access an object from methods
            system = self.system(), // this method returns an object with system variables.
            langs = self.langs;  // localization object with data from the localization file (i18n folder)


        var areaHandlers = {
            ccard: function () {  // Contact card
                self.contacts = collectContactInfo();
                console.log("Contact info:", self.contacts);
            },
            lcard: function () {  // Lead card
                console.log("Estamos en Lead Card");
            },
            comcard: function () {  // Company card
                console.log("Estamos en Company Card");
            },
            clist: function () {  // Lista de contactos
                console.log("Lista de contactos seleccionada");
                console.log(self.list_selected());

            },
            llist: function () {  // Lista de leads
                console.log("Lista de leads seleccionada");
                console.log(self.list_selected());
            },
            tlist: function () {  // Lista de tareas
                console.log("Lista de tareas seleccionada");
                console.log(self.list_selected());
            },
            settings: function () {  // Página de configuración
                console.log("Configuración del widget abierta");
            },
            everywhere: function () {  // Fallback
                console.log("Área no específica, fallback 'everywhere'");
            }
        };

        this.callbacks = {
            settings: function () { // El método se activa cuando el usuario hace clic en el icono del widget en el área de configuración. Le permite agregar una ventana modal a su página.

                console.log('Settings');

            },
            init: function () { // se ejecuta inmediatamente al iniciar despues del render
                var area = system.area;
                if (areaHandlers[area]) {
                    areaHandlers[area](); // Ejecutar handler del área
                }
                return true;
            },
            bind_actions: function () { // se utiliza para adjuntar eventos a las acciones del usuario
                return true;
            },
            render: function () { // Se eejcuta al inciar el widget
                return true;
            },
            dpSettings: function () { //  se ejecuta cuando el usuario hace clic en el icono del widget en el área de configuración del embudo de ventas
            },
            advancedSettings: function () { // Este método se llama cuando el usuario navega a la página de configuración avanzada del widget
            },
            destroy: function () { // Esta función también se activa cuando desactivar el widget a través de su menú de configuración.
            },
            contacts: { // Esta función se activa cuando selecciona elementos del lista de tareas utilizando la casilla de verificación y luego haciendo clic en el nombre del widget en el menú adicional que aparece al elegir elementos de una lista.
                selected: function () {
                }
            },
            onSalesbotDesignerSave: function (handler_code, params) { },
            leads: { //Esta función se activa cuando selecciona elementos del lista de líderes utilizando la casilla de verificación y luego haciendo clic en el nombre del widget en el menú adicional que aparece al elegir elementos de una lista.
                selected: function () {
                }
            },
            todo: {
                selected: function () { }
            },
            onSave: function () { }, // El método se llama cuando el usuario hace clic en el Establecer/Guardar botón en la configuración del widget.
            onAddAsSource: function (pipeline_id) { } // La función se llama cuando se agrega un widget como fuente en la configuración de la canalización digital.
        };
        return this;
    };
    return CustomWidget;
});
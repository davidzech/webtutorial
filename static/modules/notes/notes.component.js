angular.module('notes').component('notesList', {
    templateUrl: "modules/notes/notes.template.html",
    controller: ['Note', function NotesController(Note) { // Dependency Injection. Basically, there's a global registry of registered factories and services, and you can ask for them to be injected
        var $ctrl = this
        // Note is literally the $resource() from the factory
        $ctrl.notes = Note.query();

        $ctrl.addNote = function() {
            if ($ctrl.noteText) {
                var n = new Note({value: $ctrl.noteText})
                var savePromise = n.$save();
                savePromise.then(function() {
                    $ctrl.notes.push(n)
                })
            }
        }
    }]
})
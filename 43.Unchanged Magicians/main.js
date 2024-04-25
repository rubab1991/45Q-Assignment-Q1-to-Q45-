var magicians = ["Ali", "Hamza", "Hassan", "Fahad"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
        console.log(magician + " " + "The Great");
    }
}
show_magicians(magicians);

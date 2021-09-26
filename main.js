
var img = [
    "F.jpg", "M.jpg", "GF.jpg", "GM.jpg", "S.jpg"
];

var names = [
    "Family Book", "John.S", "Mary.J", "Smite", "Jane", "Mark"
];

var i = 0
function update() {
    i++;
    var numbers_of_family_members_in_array = 5
    if (i > numbers_of_family_members_in_array) {
        i = 0
    }
    var updatedImg = img[i];
    var updatedName = names[i];
    document.getElementById("family_members_image").src = updatedImg;
    document.getElementById("family_members_name").innerHTML = updatedName;
}
export default {
	mounted() {
		var btn = document.querySelectorAll(".demo-block-control")
		btn.forEach(function(a) {

			a.onclick = function() {
				var menu = this.previousElementSibling.classList

				if ("eleopen" != menu[1]) {
					menu.add("eleopen")
				} else {
					menu.remove("eleopen")
				}
				console.log(menu)
			}
		})
	},
	
	
}

        function volume_sphere() {
            // Retrieve the radius value entered by the user
            let radius = document.getElementById("radius").value;

            // Validate the input to ensure the radius is a non-negative number
            if (isNaN(radius) || radius < 0) {
                document.getElementById("volume").value = 'NaN';
                return;
            }

            // Convert the radius to a number
            radius = Number(radius);

            // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
            let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

            // Round the volume to four decimal places
            volume = volume.toFixed(4);

            // Display the calculated volume in the designated output field
            document.getElementById("volume").value = volume;
        }

        // Attach event listener to the form submission
        window.onload = function() {
            document.getElementById("sphere-form").onsubmit = function(event) {
                event.preventDefault();
                volume_sphere();
            }
        }
const image = document.querySelector('#main-image');
        const heartIcon = document.querySelector('#heart-icon');
        const like = document.querySelector('#like-button');
        const liked = document.querySelector('#liked-button');
        let lastTap = 0;

        // Function to show heart icon animation
        function showHeartIcon() {
            heartIcon.classList.remove('scale-0');
            heartIcon.classList.add('scale-100');
            setTimeout(function () {
                heartIcon.classList.remove('scale-100');
                heartIcon.classList.add('scale-0');
            }, 800);
        }

        // Toggle between like and liked
        like.addEventListener("click", function () {
            like.classList.add("hidden");
            liked.classList.remove("hidden");
        });

        liked.addEventListener("click", function () {
            liked.classList.add("hidden");
            like.classList.remove("hidden");
        });

        // Double-tap functionality for liking the image
        image.addEventListener('click', function (event) {
            const currentTime = new Date().getTime();
            const tapInterval = currentTime - lastTap;

            if (tapInterval < 300 && tapInterval > 0) {
                showHeartIcon(); // Show the heart animation on double-tap

                
                if (like.classList.contains('hidden') === false) {
                    like.classList.add("hidden");
                    liked.classList.remove("hidden");
                }
            }

            lastTap = currentTime;
        });

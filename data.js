document.addEventListener('alpine:init', () => {

    Alpine.data('eatApples', () => ({
        green : 0,
        red : 0,
        eat(color) {
            if (color == 'red') {
                this.red++;
            }
            else if (color == 'green') {
                this.green++;
            }
        },

        resetApples() {
            this.green = 0;
            this.red = 0;
        },
        eatenEnoughGreen() {
            return this.green < 1
        }
    }));

    Alpine.data('greetMe', () => ({
        greetMessage : '',
        username : '',
        greetMe() {
            this.greetMessage = greet(this.username);
            setTimeout(() => { 
                this.greetMessage = '';
                this.username = '';
            }, 4000);
        }
    }));

});
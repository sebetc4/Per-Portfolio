export default class Grid {
    constructor() {
        this.githubGridBoxContainer = document.querySelector('.github-grid-box-container');
        this.githubGridDates = document.querySelector('.github-grid-dates');
        this.largeScreenGithubGrid = {
            numberBox: 365,
            coloredBoxList: [
                42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 62, 63, 66, 67, 69, 70, 73, 74, 76,
                77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 101, 103, 104, 107,
                108, 110, 111, 114, 115, 117, 118, 119, 120, 121, 122, 123, 124, 132, 133, 139, 140, 144, 145, 148, 149,
                151, 152, 155, 156, 158, 159, 163, 164, 165, 167, 168, 169, 173, 174, 180, 181, 185, 186, 187, 188, 189,
                190, 192, 193, 196, 197, 199, 200, 201, 202, 203, 204, 205, 206, 209, 210, 214, 215, 221, 222, 226, 227,
                228, 229, 230, 231, 233, 234, 237, 238, 240, 241, 245, 246, 247, 248, 249, 250, 251, 253, 254, 255, 256,
                257, 258, 262, 263, 267, 268, 271, 272, 274, 275, 276, 277, 278, 279, 281, 282, 283, 284, 285, 286, 288,
                289, 290, 291, 294, 295, 296, 297, 298, 299, 303, 304, 308, 309, 312, 313, 316, 317, 318, 319, 322, 323,
                324, 325, 326,
            ],
            monthList: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.smallScreenGithubGrid = {
            numberBox: 183,
            coloredBoxList: [
                28, 29, 30, 32, 33, 34, 36, 37, 38, 40, 43, 45, 48, 50, 51, 52, 54, 60, 64, 67, 70, 72, 75, 77, 80, 81,
                83, 84, 87, 91, 94, 95, 96, 97, 99, 102, 104, 105, 106, 108, 111, 114, 118, 121, 124, 126, 129, 131,
                134, 136, 137, 140, 141, 142, 145, 148, 151, 153, 154, 155, 156, 158, 159, 160,
            ],
            monthList: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui'],
        };
    }

    display(screenSize) {
        const githubGrid = screenSize === 'large-screen' ? this.largeScreenGithubGrid : this.smallScreenGithubGrid;

        this.deleteChilds(this.githubGridBoxContainer);
        this.deleteChilds(this.githubGridDates);

        for (let i = 0; i < githubGrid.numberBox; i++) {
            const el = document.createElement('div');
            el.classList = `github-grid-box-container__box ${githubGrid.coloredBoxList.includes(i) ? 'active' : ''}`;
            this.githubGridBoxContainer.appendChild(el);
        }

        githubGrid.monthList.forEach((month) => {
            const el = document.createElement('span');
            el.appendChild(document.createTextNode(month));
            this.githubGridDates.appendChild(el);
        });
    }

    deleteChilds(parent) {
        let child = parent.lastElementChild;
        while (child) {
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    }
}

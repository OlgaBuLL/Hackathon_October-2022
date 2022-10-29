const form = document.querySelector("form");
const result = document.querySelector(".result");

const no_choose = [0, 0, 0, 0]
const blue_tree = [0, 3000, 5000, 7000];
const pine = [0, 2000, 3500, 5000];
const fir = [0, 3500, 5500, 8000];

const treePrices = [no_choose, blue_tree, pine, fir];


form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let sum = 0;

    //Выбор сорта и высоты елки:

    const trees = document.querySelector('select[name="tree"]');
    const height = document.querySelector('select[name="tree_height"]');

    const treeArray = treePrices[trees.value];
    const treePrice = treeArray[height.value];

    sum += treePrice;

    // //выбор доставки
    const delivery = document.querySelector('input[value="delivery"]');

    if(delivery.checked) {
        sum +=500;
    }

    // доставка в горшке
    const tree_pot = document.querySelector('input[value="tree_pot"]');

    if(tree_pot.checked) {
        sum +=1000;
    }

    //Выбор украшений

    const ornaments = document.querySelectorAll('input[name="ornaments"]');

    let ornament1 = ornaments[0];
    let ornament2 = ornaments[1];
    let ornament3 = ornaments[2];
    let ornament4 = ornaments[3];

    if (ornament1.checked) {
        sum += 1500;
        } else if (ornament2.checked) {
        sum += 3000;
        } else if (ornament3.checked) {
        sum += 4500;
        } else if (ornament4.checked) {
        sum += 0;
                }

    //Утилизация живой елки

    const export_heights = document.querySelectorAll('input[name="export_height"]');

    let export_height1 = export_heights[0];
    let export_height2 = export_heights[1];
    let export_height3 = export_heights[2];
    let export_height4 = export_heights[2];


    if (export_height1.checked) {
        sum += 500;
        } else if (export_height2.checked) {
        sum += 700;
        } else if (export_height3.checked) {
        sum += 1500;
        } else if (export_height4.checked) {
        sum += 0;}

    //Утилизация пластика

    const plastic_export = document.querySelector('input[value="plastic_export"]');

    if(plastic_export.checked) {
        sum +=1000;
    }

    //Реставрация гирлянд и елочных игрушек

        const restoration = document.querySelector('input[value="restoration"]');

        if(restoration.checked) {
            sum +=2000;
        }

    //Утилизация пластика

    const tree_out = document.querySelector('input[value="tree_out"]');

    if(tree_out.checked) {
        sum +=3000;
    }

    //вывод результата

    result.innerHTML = `Итого ${sum} рублей`;
})
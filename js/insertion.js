async function insertionSort()
{
	let i, key, j;
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background='green';
	for (i = 1; i < ele.length; i++)
	{
		let key = ele[i].style.height;
		j = i - 1;
        ele[i].style.background='blue';
        await waitforme(delay);
		while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key))
		{
            
            ele[j].style.background='blue';
           
			ele[j+1].style.height = ele[j].style.height;
			j--;
            await waitforme(delay);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
		}
		ele[j+1].style.height = key;
        ele[i].style.background = 'green';
	}
}
const insertionbtn=document.querySelector(".insertion");

insertionbtn.addEventListener("click",async function(){
	disableButtons();
	disableSizeSlider();
	disableBtns();
	await insertionSort();
	enableButtons();
	enableSizeSlider();
	enableBtns();
});


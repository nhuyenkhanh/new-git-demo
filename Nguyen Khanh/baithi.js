// bai 1 
let x = 0
let y = 0
let z = 0
function tinhGiaTriBieuThuc(x, y, z) {
    let bt = 3*x*x*x*x - 5*x*y + 6*z*y*y - 7/2*z*z*z*z
    console.log(bt)
}
tinhGiaTriBieuThuc(5,1,2)

// bai 2

function tinhTrangCanNang(canNang, chieuCao) {
    let BMI = canNang / (chieuCao*chieuCao)
    if (BMI < 17) {
        console.log('nguoi nay bi om')
    }
    else if (BMI >= 17 && BMI <= 25) {
        console.log('Nguoi nay binh thuong')
    }
    else {
        console.log('Nguoi nay bi thua can')
    }

}

tinhTrangCanNang(80, 1.7)
tinhTrangCanNang(63, 1.65)

// bai 3
function giaiPhuongTrinhBac2(a,b,c)
{
    if(a===0 && b===0)
    {
        console.log('Vo nghiem!')
    }
    else if(a===0)
    {
        let x = -c/b
        console.log('Co 1 nghiem x = ', x)
    }
    let dt = (Math.pow(b,2)-(4*a*c))

    if(dt > 0)
    {
        let x1=(-b+Math.sqrt(dt))/(2*a)
        let x2=(-b-Math.sqrt(dt))/(2*a)
        console.log('x1 = ', x1, '\nx2 = ', x2)
    }
    else if(dt == 0)
    {
        x1=x2= (-b)/(2*a)
        console.log('x1 = ', x1, '/nx2 = ', x2)
    }
    else if(dt < 0)
    {
        console.log('Phuong trinh vo nghiem!')
    }
}

giaiPhuongTrinhBac2(1,1,1)
giaiPhuongTrinhBac2(1,-5,6)

// bai 4
let arr = [5, 1, -2, 8, 10]
function timDoLech(arr)
{
    let max = 0
    let min = 0
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i]>max)
            max = arr[i]
        if (arr[i]<min)
            min = arr[i]
    }   
    console.log('Do chenh lenh giua 2 gia tri max min la: ', max - min)
}

function timCapSoTongBang6(arr)
{
    let CapSoCoTongBang6 = []
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === 6)
            {
                //console.log('Cap so' + a[i] +' và ' + a[j] + ' co tong bang 6!')
                CapSoCoTongBang6.push([arr[i], arr[j]])
            }
        }
    }
    return CapSoCoTongBang6
    
}



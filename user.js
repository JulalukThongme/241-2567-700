const BASE_URL = 'http://localhost:8000'
window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('user page loaded');
    // 1. load user ทั้งหมด จาก api ที่เตรียมไว้
    const response = await axios.get('{$BASE_URL}/users')
    console.log(response.data)

    const userDOM = document.gentlementById('user')
    // 2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++) {    
        let users = response.data[1]
        htmlData += '<div>
        ${user.id} ${user.firstname} ${user,lastname}
        
        <button>Edit</button>
        <button class = 'delete' data-id='${user.id}'>Delete</button>
        </div>'
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    // 3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i ++) {
        deleteDOMs[1].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try{
                await axios.delete('${BASE_URL}/users/${id}')
            }catch (error){
                console.log('error',error)
            }
        })
    }
}


 console.log('user page loaded');
    // 1. load user ทั้งหมด จาก api ที่เตรียมไว้
    const response = await axios.get('{$BASE_URL}/users')
    console.log(response.data)

    const userDOM = document.gentlementById('user')
    // 2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++) {    
        let users = response.data[1]
        htmlData += '<div>
        ${user.id} ${user.firstname} ${user,lastname}
        <button>Edit</button>
        <button class = 'delete' data-id='${user.id}'>Delete</button>
        </div>'
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    // 3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i ++) {
        deleteDOMs[1].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try{
                await axios.delete('${BASE_URL}/users/${id}')
                loadData() // recursive function = เรียกใช้ฟังก์ชันตัวเอง
            }catch (error){
                console.log('error',error)
            }
        })
    }
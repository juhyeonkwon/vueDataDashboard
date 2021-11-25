<template>
    <div>
        <p>하이롱</p>

        <label>사용할 크레인 선택 : </label>
        <select v-model="crane_id">
            <option>crane_1</option>
            <option>crane_2</option>
            <option>crane_3</option>
            <option>crane_4</option>
            <option>crane_5</option>
            <option>crane_6</option>
            <option>crane_7</option>
            <option>crane_8</option>
            <option>crane_9</option>
            <option>crane_10</option>
            <option>crane_11</option>
        </select>
        <br />
        <label>대여하는 부서 : </label>        
        <input type="text" v-model="department" />
        <br />
        <label>대여 날짜 : </label>        
        <input type="date" v-model="date"/>
        <br />
        <label>대여 시간 : </label>        
        <input type="time" step="300" v-model="time"/> ~ <input type="time" step="300" v-model="time2"/>

        <br />
        <button v-on:click="submit">사용등록하기</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created() {
        let today = new Date();

        let month = today.getMonth() + 1;

        if(month < 10) {
            month = '0' + month;
        }

        let day = today.getDate();

        if(day < 10) {
            day = '0' + day;
        }


        this.date = today.getFullYear() + '-' + month +  '-' + day;
    },
    data() {
        return {
            crane_id : '',
            department : '',
            date : '',
            time : '',
            time2 : '',
        }
    },
    methods : {
        submit : function() {
            console.log(this.crane_id, this.department, this.date + ' ' + this.time)
            axios.post('/api/crane/rent', {crane_id : this.crane_id, department : this.department, start : this.date + ' ' + this.time, end : this.date + ' ' + this.time2,})
            .then(response => {
                    console.log(response)
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

</style>
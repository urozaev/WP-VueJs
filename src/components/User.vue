<template>
    <li class="col-md-4 list-group-item user">
        <span>Юзер - {{message}}</span>
        <!-- <div class="content">
            <span><strong>{{item.name}}</strong></span>
            <br>
            <span>ID: {{item.id}}</span>
            <br>
            <span>Специальность:<br>{{item.role}}</span>
            <br>
            <span> Номер телефона:<br>{{item.phone}}</span>
        </div> -->
            
        <button type="button" class="user__edit-btn btn btn-primary" @click="editItem(index)">
            <span aria-hidden="true">Изменить</span>
        </button>
    </li>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    mounted() {
        this.message = this.$store.getters.getMessage
    }

}
</script>

<style lang="sass" scoped>
</style>
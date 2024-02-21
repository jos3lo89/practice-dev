<script setup lang="ts">
import { reactive, ref } from "vue";

interface Iteacher {
  nombre: string;
  apellido: string;
  dni: null | number;
  materias: string[];
  doc: boolean;
}

const materia = ref<string>("");

const teacher: Iteacher = reactive({
  nombre: "",
  apellido: "",
  dni: null,
  materias: [],
  doc: false,
});

const teacherList = ref<Iteacher[]>([]);

const addMateria = (): void => {
  if (materia.value === "") return;
  teacher.materias.push(materia.value);
  materia.value = "";
};

const addTeacher = (): void => {
  teacherList.value.push({ ...teacher, materias: [...teacher.materias] });
  teacher.nombre = "";
  teacher.apellido = "";
  teacher.dni = null;
  teacher.doc = false;
  teacher.materias = [];
};
</script>

<template>
  <section>
    <input v-model="teacher.nombre" type="text" placeholder="Nombre" />
    <input v-model="teacher.apellido" type="text" placeholder="Apellido" />
    <input v-model="teacher.dni" type="text" placeholder="DNI" />
    <div>
      <input v-model="materia" type="text" placeholder="materia" />
      <button @click="addMateria()">Agregar</button>
      <div>
        <ul>
          <li v-for="(m, i) in teacher.materias" :key="i">{{ m }}</li>
        </ul>
      </div>
    </div>
    <div class="box-check">
      <input v-model="teacher.doc" type="checkbox" />
      <span>Documentación entregada ?</span>
    </div>
    <div>
      <button @click="addTeacher()">Registrar</button>
    </div>
  </section>

  <section>
    <div>
      <h2>Teacher List</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Dni</th>
          <th>Materias</th>
          <th>Documentación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teach, y) in teacherList" :key="y">
          <td>{{ teach.nombre }}</td>
          <td>{{ teach.apellido }}</td>
          <td>{{ teach.dni }}</td>
          <td>
            <span v-for="(mat, t) in teach.materias" :key="t">
              {{ mat }} <span v-if="t !== teach.materias.length - 1">, </span>
            </span>
          </td>
          <td>{{ teach.doc ? "Entregado" : "No entregadi" }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
section {
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: #303030;
  border-radius: 20px;
}

input {
  padding: 9px;
  outline: none;
  border: none;
  border-radius: 10px;
  display: block;
}

button {
  padding: 5px;
  margin: 10px;
  display: block;
  border-radius: 10px;
  background: olivedrab;
  outline: none;
  border: none;
  color: #efefef;
  cursor: pointer;
}
.box-check {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.box-check input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.box-check span {
  margin-left: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

th {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

td {
  border: 1px solid #dddddd;
  padding: 8px;
}

td:nth-child(5) {
  text-align: center;
}

td:nth-child(5):contains("Entregado") {
  color: green;
  font-weight: bold;
}

td:nth-child(5):contains("No entregado") {
  color: red;
  font-weight: bold;
}
</style>

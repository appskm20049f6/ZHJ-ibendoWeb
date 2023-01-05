<template>
  <div class="table">
    <table>
      <tr>
        <th>時間</th>
        <th>狀況</th>
        <th>兌換獎勵</th>
        <th>積分變動</th>
        <th>變動後積分</th>
        <th>虛寶序號</th>
      </tr>
      <tr>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
      <tr>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
      <tr>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
      <tr>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
      <tr>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
    </table>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.table {
  width: 70%;
  height: 70%;
  display: flex;
  table {
    border-collapse: collapse;

    th {
      background-color: #009879;
      color: #ffffff;
      width: 25vw;
      height: 75px;
    }

    td {
      background-color: #ffffff;
      width: 25vw;
      height: 50px;
      text-align: center;
    }

    tr {
      border-bottom: 1px solid #dddddd;
    }

    tr:last-of-type {
      border-bottom: 2px solid #009879;
    }

    tr:nth-of-type(even) td {
      background-color: #f3f3f3;
    }
  }
}
</style>

<script>
  export let nickname;
  export let name;
</script>

<style>
    .Profile-content {
      display: flex;
      align-items: center;
    }
    .Profile-avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile-info {
      margin: 0 0 0 0.5em;
    }
    .Profile-info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .Profile-info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>
  
<div class="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://avatars.githubusercontent.com/u/32272414?s=460&u=5008c902eaf5b3a2b267b5600888bf7a04cc596e&v=4" alt="profile">
        </div>
        <div class="Profile-info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
</div>
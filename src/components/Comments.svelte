<script>
import { } from "node:os";
import App from "../containers/App.svelte";

</script>
<div class="Comments">
    <div class="Comments-container">
        <div class="Comments-users">
            <h3>Crispeta</h3>
            <span>Hola Elmo</span>
        </div>
        <div class="Comments-add">
            <form>
                <input type="text"
                    class="Comments-input"
                    placeholder="Agregar comentario..."
                    id="text" />
                <button type="submit">Post</button>
            </form>
        </div>
    </div>
</div>
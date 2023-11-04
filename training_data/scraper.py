import sqlite3
import re

def scrape_all_scripts() -> None:
    con = sqlite3.connect("database.sqlite")
    cur = con.cursor()
    res = cur.execute("SELECT * FROM scripts")
    lst = res.fetchall()
    current_sketch = None
    current_scene_dialogue = []
    for entry in lst:
        if entry[3] != current_sketch:
            print(current_sketch)
            if current_sketch is None:
                current_sketch = "None"
            sanitised_path = re.sub(r'[/\\?%*:|\"<>\x7F\x00-\x1F]', '-', current_sketch)
            with open(f"data/{sanitised_path}.txt", "w") as f:
                for line in current_scene_dialogue:
                    f.write(line)
            current_sketch = entry[3]
            current_scene_dialogue = []
        else:
            if entry[5] is None:
                current_scene_dialogue.append(f"DIRECTION:\n{entry[7]}\n\n")
            else:
                current_scene_dialogue.append(f"{entry[5].upper()}:\n{entry[7]}\n\n")

if __name__ == "__main__":
    scrape_all_scripts()
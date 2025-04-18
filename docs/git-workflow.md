## ✅ Git Workflow (Issue -> Pull Request)

### 1. Branch үүсгэх

- Тухайн Issue-д зориулж Projects руу орж **шинэ branch** үүсгэнэ:

### 2. Код бичих

- Өөрийн device дээр branch-аа хуулж аван (clone хийсэн repo дотор шинэ branch руу орно).
- Issue-д заагдсан ажлыг хийж, кодоо бичнэ.

### 3. Код бичиж дуусаад main руу merge хийх бэлтгэл

- **Өөрийн branch дээр дараах дарааллаар ажиллана:**
  git add .
  git commit -m "Тодорхой commit message бичих"

- **Main branch руу шилжээд хамгийн сүүлийн шинэчлэл татна:**
  git switch main
  git pull

- **Дахин өөрийн branch руу буцаж орно:**

- **Main branch-ийг өөрийн branch дээрээ авчирч rebase хийнэ:**
  git rebase main

- **Conflict байвал багийн ахлагчаар шийдүүлнэ:**
  git status
  git add .
  git rebase --continue

- **Кодоо засаж push хийнэ:**
  git push -f

### 4. Pull Request үүсгэх

- GitHub руу орж:
  - Төслийн репо → `Pull Requests` → [**Compare & pull request**] товч дарна.
  - Мэдээллээ бөглөнө:
    - **Title**: Яг ямар асуудлыг шийдэж байгааг товч тодорхой бичих
    - **Description**: Хийсэн ажлын дэлгэрэнгүй тайлбар
    - **Base branch**: `main`
    - **Compare branch**: өөрийн branch (жишээ: `feature/issue-ner`)
  - [**Create Pull Request**] товчийг дарна.

### 🏠 Анги болон гэр хоёрын хооронд нэг Branch дээр ажиллахдаа анхаарах зүйлс

#### Анги дээр хийсэн ажлаа GitHub руу push хийх:

git add .
git commit -m "feature/issue-ner: дуусгасан ажил"
git push origin feature/issue-ner

#### Гэртээ очоод үргэлжлүүлэн ажиллах:

# Repo-г GitHub-аас татах (анх удаа бол):

git clone https://github.com/username/repo-name.git
cd repo-name

# Өөрийн branch руу орно:

git checkout feature/issue-ner

# Шинэчлэл орсон эсэхийг шалгах:

git pull origin feature/issue-ner

# Кодоо үргэлжлүүлэн хийнэ, дараа нь push:

git add .
git commit -m "feature/issue-ner: гэртээ үргэлжлүүлэв"
git push

# ⚠️ Анги, гэр хоёрын хооронд нэг branch дээр ажиллаж байгаа үед **push/pull-аа тогтмол хийж** sync-дэж байх хэрэгтэй!

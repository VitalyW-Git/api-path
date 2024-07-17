/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/

/**
 * Класс для работы с API
 *
 * @author		User Name
 * @version		v.1.0 (dd/mm/yyyy)
 */
class Api
{
  constructor()
  {

  }


  /**
   * Заполняет строковый шаблон template данными из объекта object
   *
   * @author		User Name
   * @version		v.1.0 (dd/mm/yyyy)
   * @param		{object} object
   * @param		{string} template
   * @return		{string}
   */
  getApiPath(object, template)
  {
    return  template
      .replace('%id%', object?.id)
      .replace('%name%', encodeURIComponent(object?.name))
      .replace('%role%', encodeURIComponent(object?.role))
      .replace('%salary%', object?.salary);
  }
}


const user =
  {
    id		: 20,
    name	: 'John Dow',
    role	: 'QA',
    salary	: 100
  };

let apiPathTemplates =
  [
    "/api/items/%id%/%name%",
    "/api/items/%id%/%role%",
    "/api/items/%id%/%salary%"
  ];

const api = new Api();

const apiPaths = apiPathTemplates.map((template) =>
{
  return api.getApiPath(user, template);
});

console.log(JSON.stringify(apiPaths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];

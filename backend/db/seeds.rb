# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(
  username: 'test1',
  email: 'test1@example.com',
  password: 'password1234',
  first_name: 'John',
  last_name: 'Doe'
)

Recipe.create(
    label: "Chicken Vesuvio",
    images: 
        [
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5eab04c18641f2fb5e09c95421c7c1a091aff52c955380b7966339586de17009",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ea62e523fc7248db6f6f16df9b9c2720731f7d2cec6ab44e34805cc0c4ed325",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e91dcc1a9d028d60c83c664c8d8fc0fccae050b51c280db0175f6706eabd7bd8",
            "width": 300,
            "height": 300
          }
        ],
    ingredientsLines: 
        [
            "1/2 cup olive oil",
            "5 cloves garlic, peeled",
            "2 large russet potatoes, peeled and cut into chunks",
            "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
            "3/4 cup white wine",
            "3/4 cup chicken stock",
            "3 tablespoons chopped parsley",
            "1 tablespoon dried oregano",
            "Salt and pepper",
            "1 cup frozen peas, thawed"
        ],
)


Recipe.create(
    label: "Chicken Paprikash",
    images: 
        [
            "THUMBNAIL": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=763de9b03f3c4192c569af616bd884bbb8f6e507d420509f19f5949446ed6ad5",
                "width": 100,
                "height": 100
              },
              "SMALL": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c4e50e0b148cd74be068d8dca3f1c5969ebc692106886c3afcc8f9041e3f54d",
                "width": 200,
                "height": 200
              },
              "REGULAR": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=354f14376829ea4111257d485ce5e08eb9d61afacd4867a771469118c0a93b14",
                "width": 300,
                "height": 300
              },
              "LARGE": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHHLJ0H4MQyPQwULLbso%2B5RgRxxGyjfTdIN3fqHHyKp6AiArRI3l89dWDbIFGxs91LFRHfiQ7N6i3aZiuFIOtyXSCiq5BQhKEAAaDDE4NzAxNzE1MDk4NiIMI6GpboBgMLCrd%2F8FKpYFSgcct24HWGgmrw6b7PgEVXUAQmNQLi4xZmVpQPxve3ANzKbunWOSi39Pm%2F2q2Xe1BAE87umgPnVvi%2BwyPSuxqJQ1nGj6Ob5ngQH8vvMgx1mw7MV2HK7uCsdFbgAPav73MpxkMR%2F5fqq0DXsvhre345SVtqU0u%2F0Ni0u9vyJ7mkNge%2Fw%2Bzjv5IuYjVzDfF1fW082uCTnNlUzAqxzqDZXxr9AtJ0QjGFu7XyrtOfuoxZ8VpO0Wr7WmnLKdWyj0UW%2FiozufOMTdKjmLscqZBbmKQTH0%2FVRuIsseLvc%2FJ1bKE5QKrseg9wdnLwjEBmRbu3RH0TT2Cd65DizLdFTSfneDW1JHOef2%2BoA9BOknkSKX8jIqk94rmHRm%2BvhMefXBTE0BHQtzM3K9Eh%2BB8NQV%2Fa7y0i1OCYxs2v2YQLXW5cGm05Q9v702Gq8YlcjsdjevILhGBk%2BzCjGIiwLxzKXMF4FCywCr%2F9CxqST8gw8X60%2FmOwqudwF62y4Ecy2hqWs3kR2jdHlmmXNSutvRzvLS04sImEqZ%2BaEqYI3Oe09NNYVRfe6FFg3S2GhC0Hm%2BZ8O8D40Riw9SkCJkEFQYOMoBHvIzXT16%2B4zb4Jpbh2T5SI1mSROENt79vdxOv%2FEbQ%2FOOoYQ4J5zSj1%2BfFE7sCWAc7Fzn5azNRXBjf6Cz%2FQoccqiNgOdV9Q1Lg7QubvLiERtlbhFOepykOVk5Natvv9L%2FOy%2Bouwsfyy26f%2FFIjfgSn3TMUnj4ZmgPAsQPtfwFxe4BH7XIZ3v2iuqiRhR%2FxA2R34J4RmaTJAN19H3OXrKtYZLoIGgVBei3tGzKBaFw5qKQR0WEPmSUwCCLhaQ9sVmuRWUoR%2FJ7e2ueV2eCmeNYUHsu%2FOIMyoWXicww5J7vrQY6sgErhJO9Q1bEQl%2BaeVf3H4ptg%2BsaLn4kOCqMnimKkME9Yamjh%2BPzwYfy7SqEDW0g6mPklb9edX7ki1UKIfrUZk5NxsSa1tQeM5f4bHjQxVk9i%2BvNrr9kwpI8yR%2FV7RLDKjcgyBpwCMO7o%2BQb2x1T3AuLUgk0kXRsscHlQa0SYesRW0KZP%2F4TeWEht5sn3zjrC9Sz1ygIoA8fmfVHlr5lpngoyo%2BHIJYQbLfH0UXqVKFKX7RI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T184639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDMORXYMF%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a96e43d52f2c69a4556dc279ce8697bcc9c3d9ae777422ac44240cef3c7a6ab",
                "width": 600,
                "height": 600
              }
        ],
    ingredientsLines: 
        [
            "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
          "1/2 teaspoon salt",
          "1/4 teaspoon black pepper",
          "1 tablespoon butter  cultured unsalted (or olive oil)",
          "240 grams onion sliced thin (1 large onion)",
          "70 grams Anaheim pepper chopped (1 large pepper)",
          "25 grams paprika (about 1/4 cup)",
          "1 cup chicken stock",
          "1/2 teaspoon salt",
          "1/2 cup sour cream",
          "1 tablespoon flour  all-purpose"
        ],
)